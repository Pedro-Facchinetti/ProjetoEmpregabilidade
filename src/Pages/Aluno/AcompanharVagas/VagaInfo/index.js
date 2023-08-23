// VagaInfo.js
import React from 'react';
import styles from './VagaInfo.module.scss';
import TitulosSubtitulos from './TituloSubtitulo';
import Descricao from './Descricao';

function VagaInfo() {
  return (
    <div className={styles.procurarVagas__Content__VagaInfo}>
      <TitulosSubtitulos 
        bannerSrc={require('Assets/ProcurarVagas/VagaInfo/Banner.png')}
        logoSrc={require('Assets/ProcurarVagas/VagaInfo/Logoficticia.png')}
        titulo="Estágio para programador Web"
        dataPublicacao="Publicada em 16 de março de 2023"
        localidadeTexto="Brasília - DF - Remoto"
        tipoVagaTexto="Estágio"
      />

      <Descricao 
          sobreVaga="Buscamos um estagiário que esteja apto a trabalhar e aprender
           dentro de um novo âmbito de trabalho, trabalhamos diretamente com a produção
            de sites para outras empresas, então como requerimento queremos alguém que 
            queira seguir trabalho com produção WEB."
          requisitos="Estar cursando ensino superior na área de tecnologia, Engenharia de Software, 
          ADS e afins; Saber trabalhar com JavaScript, HTML & CSS seria um diferencial; Ter facilidade 
          de trabalhar em equipe de forma colaborativa; Perfil autogerenciável, transparência na comunicação
           e proatividade."
          oferecemos="Bolsa-auxílio: R$1.200; Vale refeição; Day off no aniversário; 
          Acesso a cursos dentro da empresa."
          sobreEmpresa="Nós da WebMakers trabalhamos a mais de 5 anos dentro do mercado WEB, 
          desenvolvendo sites para empresas como LG - Lugar de Gente, Asa Tecnologia, INPUT TECNOLOGIA 
          e AZ Serviços. Produzimos todo o escopo do tie, desde o Design ao Back-end, e entregamos 
          um ótimo domínio para sua hospedagem. Estamos sempre dispostos a contratar mais funcionários 
          e deixa-los preparados para nosso mercado de trabalho. Somos uma empresa focada e especializada 
          em produção, onde todos os nossos funcionários trabalham dentro ode um âmbito de trabalho saudável"
      />

      <div className={styles.procurarVagas__Content__VagaInfo__Botoes}>
        <button className={styles.procurarVagas__Content__VagaInfo__BotaoInscrever}>
          Enviar currículo
        </button>
      </div>
    </div>
  );
}

export default VagaInfo;