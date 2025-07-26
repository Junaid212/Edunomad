export default function SuccessModal({ show, onClose, delay = 3 }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative w-full max-w-sm rounded-2xl p-8 text-center
                      bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-2 text-emerald-600">
          Account Created!
        </h2>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          Redirecting to dashboard in <span className="font-semibold">{delay}</span>s
        </p>

        <button
          onClick={onClose}
          className="w-full py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500
                     text-white font-medium hover:opacity-90"
        >
          Go now
        </button>
      </div>
    </div>
  );
}
