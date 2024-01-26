import React from 'react'

export default function ButtonBox({
    className = "",
    from,
    to,
}) {
  return (
    <button type="submit" className={`w-full bg-blue-600 text-white px-4 py-3 rounded-lg ${className}`}>
        Convert {from.toUpperCase()} to {to.toUpperCase()}
    </button>
  )
}
