import { LegacyRef, useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const onFocusInput = () => {
    inputRef.current?.select();
  }

  return (
    <>
        <h4>Focus Screen</h4>
        <div>UseRefHook</div>
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Ingrese nombre"
          value="Johny Master"
        />
        <button className='btn btn-secondary mt-2' onClick={onFocusInput}>
            Set focus
        </button>
        <hr/>
    </>
  )
}
