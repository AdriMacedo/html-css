import Button from './Button';
import './Form.scss';
import { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');

  const hangleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Registered Email', email);
    setEmail('');
  };
  return (
    <form className="form" onSubmit={hangleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Sign Up For Enthralling Couch Reads"
        required
      />
      <Button label="SUBSCRIBE" variant={'subscribe'} />
    </form>
  );
}

export default Form;
