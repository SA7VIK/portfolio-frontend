import React from 'react'
import 'katex/dist/katex.min.css'

const MathBackground: React.FC = () => {
  const equations = [
    '\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\epsilon_0}',
    '\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}',
    '\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}',
    '\\lim_{n \\to \\infty} (1 + \\frac{1}{n})^n = e',
    '\\frac{d}{dx}[\\sin(x)] = \\cos(x)',
    '\\int x^n dx = \\frac{x^{n+1}}{n+1} + C',
    '\\vec{F} = m\\vec{a}',
    'E = mc^2',
    '\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}',
    '\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}',
    '\\prod_{k=1}^{n} k = n!',
    '\\binom{n}{k} = \\frac{n!}{k!(n-k)!}',
    '\\log(ab) = \\log(a) + \\log(b)',
    '\\sin^2(x) + \\cos^2(x) = 1',
    '\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n'
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {equations.map((equation, index) => (
        <div
          key={index}
          className="math-equation"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            fontSize: `${Math.random() * 1 + 1}rem`,
            opacity: 0.03 + Math.random() * 0.02
          }}
        >
          <span
            dangerouslySetInnerHTML={{
              __html: `$${equation}$`
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default MathBackground 