(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
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
`;const c=document.querySelectorAll(".type-contact");c.forEach((i,o)=>{i.addEventListener("click",()=>{o==0?location.href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnZnPXRTJMNZRpVmxVFzjtDnrfZCVQwCqCPFZVsCZsHXJqdWkGzzFwLqWdGrGMkvpPMpqG":o==1?(i.textContent="Chame no Whatsapp ↗",i.style.opacity="0",i.style.transition="0.5s",setTimeout(()=>{i.textContent="(75) 99979-4570 ↗",i.style.transition="0.5s",i.style.opacity="1"},1e3),location.href="https://wa.me/5575999794570"):o==2&&(i.textContent="Em breve ↗",i.style.opacity="0",i.style.transition="0.5s",setTimeout(()=>{i.textContent="Linkedin ↗",i.style.transition="0.5s",i.style.opacity="1"},1e3))})});
