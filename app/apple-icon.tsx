import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
  const logoPath = join(process.cwd(), 'public/images/brand/kingstone-logo.png');
  const logoData = await readFile(logoPath);
  const base64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <img
          src={base64}
          alt=""
          width={180}
          height={180}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
    ),
    { ...size }
  );
}
