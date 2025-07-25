import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleTouchIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '64px',
          fontWeight: 'bold',
          textAlign: 'center',
          lineHeight: '1',
        }}
      >
        MA
      </div>
    ),
    {
      ...size,
    }
  )
}
