export const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <span>{contact.name} </span>
        <span>{contact.number}</span>
      </li>
    ))}
  </ul>
);
