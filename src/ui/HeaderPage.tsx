import type { FC } from 'react'

interface Props {
  text: string
  textBold: string
}

export const HeaderPage: FC<Props> = ({ text, textBold }) => {
  return (
    <header className="mb-8">
      <h3 className="text-3xl font-extrabold">
        {text} {' '}<span className="text-blue-500">{textBold}</span>
      </h3>
    </header>
  )
}
