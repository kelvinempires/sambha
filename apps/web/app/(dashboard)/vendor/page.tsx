interface PageProps {
  params?: Record<string, string>;
  searchParams?: Record<string, string | string[]>;
}

function Page(props: PageProps) {
  return <div>page</div>;
}
