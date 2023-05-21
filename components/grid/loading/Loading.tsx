type LoadingProps = {
  progress: number
  message: string
}

const Loading = (props: LoadingProps) => {
  const { progress, message } = props

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '3px',
        minWidth: '90vw',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <div
        style={{
          height: '5px',
          width: '50%',
          background: 'linear-gradient(to right, white, yellow, gold)',
          borderRadius: '3px',
          overflow: 'hidden',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: 'gold',
          }}
        />
      </div>
      <p
        style={{
          fontSize: '8px',
          fontWeight: 'bold',
          color: 'black',
        }}
      >
        {message}
      </p>
    </div>
  )
}

export default Loading
