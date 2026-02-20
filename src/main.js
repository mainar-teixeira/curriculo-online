import './style.css'
// import { mouseHover } from './links';


document.querySelector('#app').innerHTML = /*html*/`
     <div class="content-header">
        <div class="title">
            <h2>Mainar Teixeira,</h2>
            <h3>Estudante de TI</h3>
        </div>
        <a href="" id="about"><p>About</p></a>
     </div>
     <div class="content">
          <div class="contact-info">
              <p class="txt-contact">Sou estudante do curso Técnico em Informática de nível médio no Instituto Federal da Bahia, com foco em desenvolvimento front-end, área que estudo e pratico há aproximadamente um ano de forma autodidata</p>
              <p class="type-contact">mainar800@gmail.com ↗</p>
              <p class="type-contact">(75) 99979-4570 ↗</p>
              <p class="type-contact">Linkedin ↗</p>
          </div>
          <div class="cv-info">
            <h2 class="curriculo">Currículo</h2>
            <div class="objetive">
              <h2>Objetivo Profissional</h2>
              <li>Aprimorar habilidades em desenvolvimento</li>
              <li>Atuar em projetos práticos e colaborativos</li>
              <li>Evoluir continuamente como profissional de tecnologia</li>
            </div>
            <div class="curso">
              <h2>Formação Acadêmica</h2>
              <p>Técnico em informática - Instituto Federal de Estudo Ciência e Técnologia da Bahia</p>
              <div class="situation">
                <p>Em andamento</p>
                <span>Previsão de conclusão: 2027</span>
              </div>
            </div>
            <div class="skillsAndMore">
               <div class="skills">
                <h2>Habilidades</h2>
                <li>HTML, CSS, JavaScript (Básico/Intermediário)</li>
                <li>Office (Word, Excel e PowerPoint)</li>
               </div>
               <div class="certificados">
                <h2>Certificados</h2>
                <li>Gestão Financeira – SEBRAE (3h)</li>
                <li>Atendimento ao Cliente – SEBRAE (8h)</li>
               </div>
            </div>
            <div class="information">
              <h2>Informações Adicionais</h2>
              <p>Familiaridade com ambientes Windows e Linux (Ubuntu), incluindo uso básico de terminal.</p>
              <p>Familiaridade com programas Office e Google</p>
            </div>
          </div>
          
     </div>
     <div class="rodape">
        <h2>Euclides da Cunha</h2>
        <h3>2026</h3>
     </div>
`

export const goFromContact = document.querySelectorAll('.type-contact');

goFromContact.forEach((all, i) => {
   all.addEventListener('click', () => {

        if (i == 0) {
            location.href  = 'https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnZnPXRTJMNZRpVmxVFzjtDnrfZCVQwCqCPFZVsCZsHXJqdWkGzzFwLqWdGrGMkvpPMpqG';
        } else if (i == 1) {
             all.textContent = "Chame no Whatsapp ↗";
             all.style.opacity = '0';
             all.style.transition = '0.5s';
           setTimeout (() => {
             all.textContent = "(75) 99979-4570 ↗";
             all.style.transition = '0.5s';
             all.style.opacity = '1';
           }, 1000);
           location.href = "https://wa.me/5575999794570";
        } else if (i == 2) {
             all.textContent = "Em breve ↗";
             all.style.opacity = '0';
             all.style.transition = '0.5s';
           setTimeout (() => {
             all.textContent = "Linkedin ↗";
             all.style.transition = '0.5s';
             all.style.opacity = '1';
           }, 1000); }
   });

});

