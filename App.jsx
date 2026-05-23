import React from 'react'
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'

export default function App() {
  const [step, setStep] = React.useState(0)

  const phases = [
    {
      label: 'Inicio',
      title: 'Feliz cumpleaños, mi amor',
      subtitle: 'Tengo algo bonito para ti...',
      message: 'Hoy quería regalarte algo diferente. Algo pequeño, pero hecho con mucho amor para recordarte lo especial que eres para mí.',
      emoji: '🐶💛'
    },
    {
      label: 'Fase 1',
      title: 'Hoy cumple años mi persona favorita',
      subtitle: 'Y eso merece celebrarse bonito',
      message: 'Me da mucha felicidad saber que existes, que formas parte de mi vida y que puedo compartir momentos contigo. Eres una persona increíble, hermosa y única.',
      emoji: '🎂✨'
    },
    {
      label: 'Fase 2',
      title: 'Gracias por ser tú',
      subtitle: 'Por tu forma de existir',
      message: 'Gracias por tus abrazos, tus risas, tus ocurrencias, tus detalles y por esa manera tan tuya de hacer que todo se sienta más bonito cuando estás cerca.',
      emoji: '🌙🤍'
    },
    {
      label: 'Fase 3',
      title: 'Deseo para ti',
      subtitle: 'Para este nuevo año de vida',
      message: 'Deseo que este año te traiga paz, amor, salud, sueños cumplidos y muchas razones para sonreír. Ojalá nunca olvides lo valiosa que eres.',
      emoji: '⭐🌷'
    },
    {
      label: 'Final',
      title: 'Te amo, feliz cumpleaños',
      subtitle: 'Con todo mi corazón',
      message: 'Si pudiera elegir de nuevo a quién amar, te elegiría a ti una y mil veces. Feliz cumpleaños, mi amor. Gracias por ser mi lugar bonito.',
      emoji: '🐾❤️'
    }
  ]

  const current = phases[step]
  const progress = ((step + 1) / phases.length) * 100

  return (
    <main className="app">
      <div className="floating f1">🐾</div>
      <div className="floating f2">💌</div>
      <div className="floating f3">🎈</div>
      <div className="floating f4">⭐</div>

      <section className="wrapper">
        <div className="topText">Una sorpresa para ti</div>

        <div className="card">
          <div className="progress">
            <div className="progressBar" style={{ width: `${progress}%` }} />
          </div>

          <div className="content">
            <div className="phaseRow">
              <div className="phaseLabel">{current.label}</div>
              <div className="counter">{step + 1}/{phases.length}</div>
            </div>

            <div className="emoji">{current.emoji}</div>

            <h1>{current.title}</h1>
            <p className="subtitle">{current.subtitle}</p>

            <div className="messageBox">
              <p>{current.message}</p>
            </div>

            <div className="buttons">
              <button
                className="backBtn"
                onClick={() => setStep(Math.max(step - 1, 0))}
                disabled={step === 0}
                aria-label="Regresar"
              >
                <ChevronLeft size={24} />
              </button>

              {step < phases.length - 1 ? (
                <button
                  className="nextBtn"
                  onClick={() => setStep(step + 1)}
                >
                  Siguiente <ChevronRight size={18} style={{ verticalAlign: 'middle' }} />
                </button>
              ) : (
                <button
                  className="nextBtn finalBtn"
                  onClick={() => setStep(0)}
                >
                  Ver otra vez <RotateCcw size={18} style={{ verticalAlign: 'middle' }} />
                </button>
              )}
            </div>
          </div>
        </div>

        <p className="footer">Hecho con amor, para la persona más bonita.</p>
      </section>
    </main>
  )
}
