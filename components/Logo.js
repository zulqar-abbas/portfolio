export default function Logo({ className = "w-8 h-8", showText = true, iconOnly = false }) {
  if (iconOnly) {
    return (
      <div className={`relative ${className}`}>
        <div className="relative w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center shadow-lg border border-slate-600/20 overflow-hidden">
          {/* Fancy horizontal line (behind the Z) */}
          <div className="absolute top-1/2 left-3 right-3 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full shadow-sm transform -translate-y-1/2"></div>
          
          {/* Subtle glow effect */}
          <div className="absolute top-1/2 left-3 right-3 h-1 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-purple-500/30 rounded-full blur-sm transform -translate-y-1/2"></div>
          
          {/* Main Z letter (on top) */}
          <div className="text-slate-100 font-bold text-2xl tracking-wide relative z-10">
            Z
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className="relative">
        <div className="relative w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center shadow-lg border border-slate-600/20 overflow-hidden">
          {/* Fancy horizontal line (behind the Z) */}
          <div className="absolute top-1/2 left-3 right-3 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full shadow-sm transform -translate-y-1/2"></div>
          
          {/* Subtle glow effect */}
          <div className="absolute top-1/2 left-3 right-3 h-1 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-purple-500/30 rounded-full blur-sm transform -translate-y-1/2"></div>
          
          {/* Main Z letter (on top) */}
          <div className="text-slate-100 font-bold text-2xl tracking-wide relative z-10">
            Z
          </div>
        </div>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-slate-900 dark:text-slate-100 leading-none tracking-wide">
            Zulqarnain
          </span>
          <span className="text-xs text-slate-600 dark:text-slate-400 leading-none font-medium">
            Abbas
          </span>
        </div>
      )}
    </div>
  )
} 