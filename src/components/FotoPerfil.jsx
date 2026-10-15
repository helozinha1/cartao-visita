export default function FotoPerfil() {
  return (
    <div className="foto-container">
      <img 
        src="https://pbs.twimg.com/media/HUo9C9CWUAAvoXM?format=webp&name=large" 
        alt="Foto de Perfil" 
        style={{ borderRadius: '50%', width: '150px', height: '150px' }}
      />
      <h2>Helo</h2>
      <p>Desenvolvedor Back-end</p>
    </div>
  );
}