function toggleLight() {
  const container = document.getElementById('main-container');
  
  // Alterna entre as classes 'dark' e 'light'
  if (container.classList.contains('dark')) {
      container.classList.remove('dark');
      container.classList.add('light');
      
      // Dica de Engenharia de Dados:
      // Aqui você registraria o evento: "Usuário acendeu a luz em " + new Date()
      console.log("Evento: Luz Acesa - Preparando Login");
  } else {
      container.classList.remove('light');
      container.classList.add('dark');
  }
}