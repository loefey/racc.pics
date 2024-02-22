import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { getStatusInfo } from '@/lib/status-info';
import StatusDescription from '@/components/StatusDescription';

import statuses from '@/lib/statuses';

export default async function Info({ params }: { params: { status: string } }) {
  const statusObj = statuses[params.status as unknown as keyof typeof statuses];
  const statusInfoHTML = await getStatusInfo(params.status);

  return (
    <main>
      <nav>
        <Link href="/" className="text-white">{`< Back to home`}</Link>
      </nav>

      <h1 className="text-center my-12">
        {statusObj.code} {statusObj.message}
      </h1>

      <div className="text-center">
        <Image
          src={`/images/${statusObj.code.toString()}.png`}
          alt={statusObj.message}
          width={750}
          height={600}
          className="w-full h-full max-w-3xl"
        />
      </div>
      <section className="flex justify-center tracking-wider">
        <StatusDescription>
          <div dangerouslySetInnerHTML={{ __html: statusInfoHTML }} />
        </StatusDescription>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(statuses).map((status) => ({ status }));
}

export function generateMetadata({
  params,
}: {
  params: { status: string };
}): Metadata {
  const statusObj = statuses[params.status as unknown as keyof typeof statuses];

  return {
    title: `${statusObj.code} ${statusObj.message} | racc.pics`,
    description: `racc.pics for status ${statusObj.code} ${statusObj.message}`,
    openGraph: {
      title: `${statusObj.code} ${statusObj.message} | racc.pics`,
      images: [
        {
          url: `https://racc.pics/${statusObj.code}.png`,
          alt: statusObj.message,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: `https://racc.pics/status/${statusObj.code}`,
      title: `${statusObj.code} ${statusObj.message} | racc.pics`,
      images: [`https://racc.pics/${statusObj.code}`],
    },
  };
}
