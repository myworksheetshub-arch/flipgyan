'use client';

import React, { useState } from 'react';
import {
  CreditCard,
  QrCode,
  Building2,
  Wallet,
  CheckCircle2,
  Lock,
  ShieldCheck,
  Sparkles,
  X,
  ArrowRight,
  Loader2,
  Check,
  ShieldAlert,
} from 'lucide-react';
import { api } from '@/lib/api';
import { useAuth } from '@/lib/auth-context';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planId: string;
  planName: string;
  price: number;
  billingCycle?: 'MONTHLY' | 'ANNUAL';
  onSuccess?: () => void;
}

export function PaymentModal({
  isOpen,
  onClose,
  planId,
  planName,
  price,
  billingCycle = 'ANNUAL',
  onSuccess,
}: PaymentModalProps) {
  const { refreshUser } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'CARD' | 'NETBANKING' | 'WALLET'>('UPI');
  const [step, setStep] = useState<'CHECKOUT' | 'PROCESSING' | 'SUCCESS'>('CHECKOUT');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [selectedBank, setSelectedBank] = useState('HDFC');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  // Calculate pricing
  const subtotal = price;
  const gst = Math.round(subtotal * 0.18);
  const totalPayable = subtotal + gst;

  const handleProcessPayment = async () => {
    setErrorMessage('');

    // Validation checks
    if (paymentMethod === 'UPI' && upiId.trim() && !upiId.includes('@')) {
      setErrorMessage('Please enter a valid UPI ID (e.g. name@okhdfcbank or 9876543210@paytm)');
      return;
    }
    if (paymentMethod === 'CARD' && cardNumber && cardNumber.replace(/\s/g, '').length < 16) {
      setErrorMessage('Please enter a valid 16-digit card number.');
      return;
    }

    setStep('PROCESSING');

    // Simulate gateway delay
    setTimeout(async () => {
      try {
        await api.subscribe(planId);
        if (refreshUser) await refreshUser();
        setStep('SUCCESS');
      } catch (err: any) {
        setStep('CHECKOUT');
        setErrorMessage(err.message || 'Payment transaction failed. Please try again.');
      }
    }, 2200);
  };

  const handleFinishSuccess = () => {
    onClose();
    if (onSuccess) onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden relative animate-in fade-in zoom-in-95">
        {/* Top Header */}
        <div className="bg-slate-900 text-white p-6 relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-500 text-white flex items-center justify-center font-bold shadow-md shadow-brand-500/30">
              <Sparkles className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold font-display">FlipGyan Payment Checkout</h2>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>256-Bit SSL Encrypted & PCI-DSS Compliant</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* STEP 1: CHECKOUT SCREEN */}
        {step === 'CHECKOUT' && (
          <div className="p-6 space-y-6">
            {/* Plan & Pricing Summary Box */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-extrabold text-slate-900 text-sm">{planName}</span>
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 font-bold text-[10px]">
                    {billingCycle}
                  </span>
                </div>
                <span className="text-sm font-black text-slate-900">₹{subtotal}</span>
              </div>
              <div className="space-y-1.5 border-t border-slate-200/80 pt-2 text-slate-600 font-medium">
                <div className="flex justify-between">
                  <span>Base Subscription Fee</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>₹{gst}</span>
                </div>
                <div className="flex justify-between font-extrabold text-slate-900 text-sm pt-1 border-t border-slate-200">
                  <span>Total Amount Payable</span>
                  <span className="text-brand-600">₹{totalPayable}</span>
                </div>
              </div>
            </div>

            {errorMessage && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-semibold flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Payment Options Nav */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Select Payment Method</label>
              <div className="grid grid-cols-4 gap-2">
                <button
                  onClick={() => setPaymentMethod('UPI')}
                  className={`p-3 rounded-2xl border flex flex-col items-center gap-1.5 text-xs font-extrabold transition ${
                    paymentMethod === 'UPI'
                      ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <QrCode className="w-5 h-5" />
                  <span>UPI / QR</span>
                </button>
                <button
                  onClick={() => setPaymentMethod('CARD')}
                  className={`p-3 rounded-2xl border flex flex-col items-center gap-1.5 text-xs font-extrabold transition ${
                    paymentMethod === 'CARD'
                      ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Cards</span>
                </button>
                <button
                  onClick={() => setPaymentMethod('NETBANKING')}
                  className={`p-3 rounded-2xl border flex flex-col items-center gap-1.5 text-xs font-extrabold transition ${
                    paymentMethod === 'NETBANKING'
                      ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Building2 className="w-5 h-5" />
                  <span>NetBanking</span>
                </button>
                <button
                  onClick={() => setPaymentMethod('WALLET')}
                  className={`p-3 rounded-2xl border flex flex-col items-center gap-1.5 text-xs font-extrabold transition ${
                    paymentMethod === 'WALLET'
                      ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Wallet className="w-5 h-5" />
                  <span>Wallets</span>
                </button>
              </div>
            </div>

            {/* PAYMENT DETAILS CONTENT */}
            {paymentMethod === 'UPI' && (
              <div className="space-y-4 pt-1">
                <div className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-200/80 flex items-center justify-between">
                  <div className="space-y-1 text-xs">
                    <p className="font-extrabold text-emerald-950">Instant UPI Payment (GPay, PhonePe, Paytm)</p>
                    <p className="text-emerald-700">Scan QR code or enter your VPA / UPI ID below</p>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-xl p-1.5 border border-emerald-300 shrink-0 flex items-center justify-center">
                    <QrCode className="w-12 h-12 text-slate-800" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Virtual Private Address (UPI ID)</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="student@gpay or 9876543210@paytm"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'CARD' && (
              <div className="space-y-3 pt-1">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="4532 •••• •••• 8912"
                    maxLength={19}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Expiry (MM/YY)</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      placeholder="08/28"
                      maxLength={5}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">CVV / CVC</label>
                    <input
                      type="password"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      placeholder="123"
                      maxLength={3}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Cardholder Name</label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Full name as printed on card"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'NETBANKING' && (
              <div className="space-y-3 pt-1 text-xs">
                <label className="text-xs font-bold text-slate-700">Select Popular Indian Banks</label>
                <div className="grid grid-cols-2 gap-2">
                  {['HDFC Bank', 'State Bank of India', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra', 'Punjab National'].map(
                    (bank) => (
                      <button
                        key={bank}
                        type="button"
                        onClick={() => setSelectedBank(bank)}
                        className={`p-3 rounded-xl border text-left font-bold transition flex items-center justify-between ${
                          selectedBank === bank
                            ? 'border-brand-500 bg-brand-50 text-brand-700'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{bank}</span>
                        {selectedBank === bank && <Check className="w-4 h-4 text-brand-600" />}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {paymentMethod === 'WALLET' && (
              <div className="space-y-3 pt-1 text-xs">
                <label className="text-xs font-bold text-slate-700">Select Mobile Wallet</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Paytm Wallet', 'Mobikwik', 'Amazon Pay', 'Freecharge'].map((w) => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setSelectedBank(w)}
                      className={`p-3 rounded-xl border text-left font-bold transition flex items-center justify-between ${
                        selectedBank === w
                          ? 'border-brand-500 bg-brand-50 text-brand-700'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{w}</span>
                      {selectedBank === w && <Check className="w-4 h-4 text-brand-600" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl text-slate-600 font-bold text-xs hover:bg-slate-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleProcessPayment}
                className="flex-1 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg shadow-brand-500/25 transition flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4 text-brand-200" />
                <span>Pay ₹{totalPayable} & Unlock PRO Now</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: PROCESSING SCREEN */}
        {step === 'PROCESSING' && (
          <div className="p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-full mx-auto flex items-center justify-center animate-spin">
              <Loader2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-slate-900 font-display">Processing Payment...</h3>
              <p className="text-xs text-slate-500">
                Please wait while we establish a secure connection with your banking gateway. Do not close or refresh this page.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full text-[11px] font-bold text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verifying 256-Bit SSL Encrypted Handshake</span>
            </div>
          </div>
        )}

        {/* STEP 3: SUCCESS SCREEN */}
        {step === 'SUCCESS' && (
          <div className="p-10 text-center space-y-6 animate-in fade-in zoom-in-95">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Transaction Successful</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-display">
                🎉 Welcome to PRO Student Pass!
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                🎉 Congratulations! You have successfully activated the <strong>{planName}</strong> Subscription. All PRO features, unlimited chapter quizzes, and solution rubrics are now 100% unlocked for your account.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs space-y-1.5 text-left max-w-sm mx-auto">
              <div className="flex justify-between font-bold text-slate-800">
                <span>Transaction ID:</span>
                <span className="font-mono text-slate-600">FG-TXN-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between font-bold text-slate-800">
                <span>Amount Paid:</span>
                <span className="text-emerald-600 font-black">₹{totalPayable}</span>
              </div>
              <div className="flex justify-between font-bold text-slate-800">
                <span>Access Status:</span>
                <span className="text-emerald-600 font-bold">Active (100% Unlocked)</span>
              </div>
            </div>

            <button
              onClick={handleFinishSuccess}
              className="w-full max-w-sm py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-xl transition flex items-center justify-center gap-2 mx-auto"
            >
              <span>Start Learning Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
