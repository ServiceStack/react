import React, { useState } from 'react'
import DarkModeToggle from '../components/DarkModeToggle'
import SecondaryButton from '../components/SecondaryButton'
import TextInput from '../components/TextInput'
import DynamicInput from '../components/DynamicInput'
import ModalDialog from '../components/ModalDialog'
import SlideOver from '../components/SlideOver'

export default function App() {
  const [show, setShow] = useState(false)
  const [slideOver, setSlideOver] = useState(false)
  const [modal, setModal] = useState(false)

  const [dates, setDates] = useState({
    isoDate7Z: '2024-01-15T10:30:00.0000000Z',
    isoDate3Z: '2024-01-15T10:30:00.000Z',
    isoDateZ: '2024-01-15T10:30:00Z',
    isoDate: '2024-01-15T10:30:00',
    isoDateOnly: '2024-01-15'
  })

  const [modelDateTimes, setModelDateTimes] = useState({})
  const [modelDates, setModelDates] = useState({})

  const dynamicDateTimes = [
    { id: 'isoDate7Z', type: 'datetime-local' },
    { id: 'isoDate3Z', type: 'datetime-local' },
    { id: 'isoDateZ', type: 'datetime-local' }
  ]

  const dynamicDates = [
    { id: 'isoDate', type: 'date' },
    { id: 'isoDateOnly', type: 'date' }
  ]

  const api = null

  return (
    <>
      <div className="absolute top-2 right-2">
        <DarkModeToggle />
      </div>

      <div className="text-center space-x-3">
        <SecondaryButton onClick={() => setShow(!show)}>Toggle</SecondaryButton>
        <SecondaryButton onClick={() => setSlideOver(!slideOver)}>Slide Over</SecondaryButton>
        <SecondaryButton onClick={() => setModal(!modal)}>Modal Dialog</SecondaryButton>
      </div>

      <div className="mt-8 mx-auto max-w-4xl flex flex-col gap-y-4">
        <h3>date</h3>
        <div className="grid grid-cols-6 gap-6">
          <TextInput
            className="col-span-2"
            type="date"
            id="isoDate7Z"
            value={dates.isoDate7Z}
            onChange={(value) => setDates({ ...dates, isoDate7Z: value as string })}
            label={dates.isoDate7Z}
          />
          <TextInput
            className="col-span-2"
            type="date"
            id="isoDate3Z"
            value={dates.isoDate3Z}
            onChange={(value) => setDates({ ...dates, isoDate3Z: value as string })}
            label={dates.isoDate3Z}
          />
          <TextInput
            className="col-span-2"
            type="date"
            id="isoDateZ"
            value={dates.isoDateZ}
            onChange={(value) => setDates({ ...dates, isoDateZ: value as string })}
            label={dates.isoDateZ}
          />
        </div>

        <h3>datetime-local</h3>
        <div className="grid grid-cols-6 gap-6">
          <TextInput
            className="col-span-2"
            type="datetime-local"
            id="isoDate7Z-dt"
            value={dates.isoDate7Z}
            onChange={(value) => setDates({ ...dates, isoDate7Z: value as string })}
            label={dates.isoDate7Z}
          />
          <TextInput
            className="col-span-2"
            type="datetime-local"
            id="isoDate3Z-dt"
            value={dates.isoDate3Z}
            onChange={(value) => setDates({ ...dates, isoDate3Z: value as string })}
            label={dates.isoDate3Z}
          />
        </div>

        <h3>Dynamic DateTimes</h3>
        <div className="grid grid-cols-6 gap-6">
          {dynamicDateTimes.map(f => (
            <div key={f.id} className="col-span-2">
              <DynamicInput
                input={f}
                value={modelDateTimes}
                onChange={setModelDateTimes}
                api={api}
              />
              <div>{modelDateTimes[f.id]}</div>
            </div>
          ))}
        </div>
        <div>
          <pre>{JSON.stringify(modelDateTimes, null, 2)}</pre>
        </div>

        <h3>Dynamic Dates</h3>
        <div className="grid grid-cols-6 gap-6">
          {dynamicDates.map(f => (
            <div key={f.id} className="col-span-2">
              <DynamicInput
                input={f}
                value={modelDates}
                onChange={setModelDates}
                api={api}
              />
              <div>{modelDates[f.id]}</div>
            </div>
          ))}
        </div>
        <div>
          <pre>{JSON.stringify(modelDates, null, 2)}</pre>
        </div>

        {show && (
          <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded">
            Content is visible!
          </div>
        )}
      </div>

      {slideOver && (
        <SlideOver title="Demo Slide Over" onDone={() => setSlideOver(false)}>
          <div className="p-4">
            <p>This is a slide over panel</p>
          </div>
        </SlideOver>
      )}

      {modal && (
        <ModalDialog onDone={() => setModal(false)}>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Modal Dialog</h2>
            <p>This is a modal dialog</p>
          </div>
        </ModalDialog>
      )}
    </>
  )
}
