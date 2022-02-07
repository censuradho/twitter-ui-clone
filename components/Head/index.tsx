import H from 'next/head'

interface HeadProps {
  title: string;
  description: string
}

export function Head ({ description, title }: HeadProps) {
  return (
    <H>
      <title>{title}</title>
      <meta name="description" content={description} />
    </H>
  )
}