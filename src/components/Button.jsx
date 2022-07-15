import React, { useState } from 'react'

export default function Button({ color }) {
  const [show, setShow] = useState(false)
  const [hide, setHide] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)

  function resultado() {
    if (show) {
      setHide(true)
      setShow(false)
    } else {
      setShow(true)
      setHide(false)
    }
  }
  function resultado2() {
    if (show2) {
      setHide(true)
      setShow2(false)
    } else {
      setShow2(true)
      setHide(false)
    }
  }
  function resultado3() {
    if (show3) {
      setHide(true)
      setShow3(false)
    } else {
      setShow3(true)
      setHide(false)
    }
  }
  function resultado4() {
    if (show4) {
      setHide(true)
      setShow4(false)
    } else {
      setShow4(true)
      setHide(false)
    }
  }

  return (
    <div>
      <h1>What do you want?</h1>
      
      <button
        type="button"
        onClick={resultado}
        className="btn btn-outline-success ms-3"
      >
        Depression
      </button>
      <button type="button" onClick={resultado2} className="btn btn-outline-success ms-3">
        Insomnia
      </button>
      <button type="button" onClick={resultado3} className="btn btn-outline-success ms-3">
        anxiety
      </button>
      <button type="button" onClick={resultado4} className="btn btn-outline-success ms-3">
        Libido
      </button>

      {show ? (
        <>
        <div className='px-4 mt-4 d-grid gap-3' >
          <img src="oleo.png"  width="60"
            height="60"/>
          <p className='w-75'>Frankincense has been said to help lift mood and balance hormones, especially in women.  One study which used frankincense alongside other oils known to promote relaxation found that the combination was effective in alleviating depression for terminally ill patients, and may have helped with pain management as well.  Another study conducted on mice found that frankincense stimulates the portion of the brain that regulates emotions, in addition to activating a protein that plays a role in the perception of warmth. These effects together can create a sense of comfort and peace.</p>
          </div>
        </>
      
      ) : (
        <></>
      )}

      {show2 ? (
        <>
         <div className='px-4 mt-4 d-grid gap-3' >
          <img src="oleo.png" width="60"
            height="60" />
          <p className='w-75'>Lavender. Lavender works to calm anxiety and offers sedative effects. It may not only help you to fall asleep but may also help you to spend more quality time in deep, slow-wave sleep.</p>
          </div>
        </>
      ) : (
        <></>
      )}
      {show3 ? (
        <>
         <div className='px-4 mt-4 d-grid gap-3' >
          <img src="oleo.png" width="60"
            height="60"/>
          <p className='w-75'>Chamomile. Chamomile is known to be calming, reducing stress. Long used as a relaxant, the sedative effects may be due to apigenin which binds to benzodiazepine receptors.</p>
          </div>
        </>
      ) : (
        <></>
      )}
      {show4 ? (
        <>
         <div className='px-4 mt-4 d-grid gap-3' >
          <img src="oleo.png" width="60"
            height="60" />
          <p className='w-75'>Patchouli essential oil has a relaxing, uplifting and sensual effect. It is soothing and slightly hypnotic and excellent for reducing stress and anxiety. It has a very distinctive aroma though that some may not like.

          Other choices of oil might include stimulating essential oils such as Black Pepper or Rosemary which can be useful where fatigue is affecting sexual desire</p>
          </div>
        </>
      ) : (
        <></>
      )}

    </div>
  )
}
