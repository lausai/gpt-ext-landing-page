export function TitleListItem({
  title, content
}: {
  title: string, content: string
}) {
  return <li className="text-lg list-disc list-inside pb-3"><span className="font-bold">{title}</span> {content}</li>
}

export function ListItem({
  content
}: {
  content: string
}) {
  return <li className="text-lg list-disc list-inside pb-3">{content}</li>
}


export function SectionTitle({
  text
}: {
  text: string
}) {
  return (
    <h3 className="text-3xl font-bold tracking-tight mt-2">{text}</h3>
  );
}


export function Email() {
  return (
    <a className="text-xl text-blue-600 dark:text-blue-500 hover:underline" href="mailto:samliu720@gmail.com">samliu720@gmail.com</a> 
  );
}


