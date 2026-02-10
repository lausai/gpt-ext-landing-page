type FeatureBlockProps = {
  title: string
  description: string
  imageSrc: string
  items?: string[]
  reverse?: boolean
  imageRatio?: number // 0.5 = 50%, 0.6 = 60%
}


function CheckIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      className="size-6"
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth="1.5" 
      stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}



export function FeatureBlock({
  title,
  description,
  imageSrc,
  items = [],
  reverse = false,
  imageRatio = 0.5,
}: FeatureBlockProps) {
  const imageWidth = `${imageRatio * 100}%`
  const textWidth = `${(1 - imageRatio) * 100}%`

  return (
    <div
      className={`my-24 flex flex-col lg:flex-row items-center gap-12 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <div className="w-full" style={{ width: imageWidth }}>
        <img
          src={imageSrc}
          alt={title}
          className="w-full rounded-xl shadow-sm"
        />
      </div>

      {/* Text */}
      <div className="w-full" style={{ width: textWidth }}>
        <h3 className="text-3xl font-semibold tracking-tight">
          {title}
        </h3>

        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          {description}
        </p>

        {items.length > 0 && (
          <>
            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <ul className="space-y-3">
              {items.map((text, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="text-primary">
                    <CheckIcon />
                  </div>
                  <span className="text-base text-gray-700 dark:text-gray-300">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

