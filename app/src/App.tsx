import { useEffect, useState } from 'react';
import './App.css';
interface BackendDTO {
  message: string;
}
function App() {
  const [message, setMessage] = useState<string>('');
  useEffect(() => {
    fetch('http://localhost:3333')
      .then((res) => res.json())
      .then((data: BackendDTO) => {
        console.log(data.message);
        setMessage(data.message);
      })
      .catch((e) => {
        setMessage('Backend service not available');
        console.error(e);
      });
  }, []);

  return (
    <div className='App'>
      <h1>Vite + React + K8s + Kubernetes</h1>
      <h2>{message}</h2>
      <div>
        <img
          style={{ width: '300px', height: '200px' }}
          src='https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
        />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Sem integer vitae justo eget magna fermentum. Ut placerat orci nulla pellentesque dignissim enim
          sit. Donec massa sapien faucibus et molestie ac feugiat sed. Orci eu lobortis elementum nibh tellus molestie
          nunc. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Vitae nunc sed velit dignissim sodales ut
          eu sem. Nam libero justo laoreet sit amet cursus sit amet. Lobortis scelerisque fermentum dui faucibus in
          ornare. Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Nisl rhoncus mattis rhoncus urna neque
          viverra justo. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Tellus in hac habitasse platea
          dictumst vestibulum rhoncus est.
        </p>
      </div>
    </div>
  );
}

export default App;
