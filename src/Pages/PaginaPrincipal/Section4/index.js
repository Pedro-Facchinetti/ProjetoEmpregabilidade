import React from 'react';

import styles from './section4.module.scss';
import { TituloSubtitulo } from './TituloSubtitulo';
import { Conclusao } from './Conclusao';
import { EmpresaCarousel, Card } from './Carousel';
import linhasImg from 'Assets/Linhas.png';

function renderSection4(props) {
  return (
    <section className={styles.EmpresasParceiras}>
      <div className={styles.EmpresasParceiras__ConteudoPrincipal}>
        <TituloSubtitulo />
        <div className={styles.carousel_container}>
        <EmpresaCarousel className={styles.carrossel}>

          <Card 
          title="Quem somos?" 
          content="Somos transformadores das nossas histórias e de milhares de outras. 
          A Framework é movida pela experiência de pessoas que creditam que a união entre 
          agilidade e a tecnologia faz o mundo girar de forma ideal." 
          backgroundImage={require('Assets/FundoFrameWork.svg').default}
          logo={require('Assets/Logo framework.svg').default}
          href="https://www.frameworkdigital.com.br" />

          <Card 
          title="Quem somos?" 
          content="Somos parceiros de transformação digital de 
          grandes empresas e experts nas principais tecnologias da atualidade. 
          Mostramos os melhores caminhos aos clientes." 
          backgroundImage={require('Assets/fundoCSP.svg').default} 
          logo={require('Assets/Logo CSP.svg').default}
          href="https://www.csptech.com.br" />
          
          <Card 
          title="Quem somos?" 
          content="Somos a CooperSystem uma cooperativa que presta 
          serviços especializados nas mais diversas áreas da Tecnologia 
          da Informação, sempre com o objetivo de levar tecnologia com qualidade 
          e usabilidade para as empresas e seus clientes." 
          backgroundImage={require('Assets/FundoCooperSystem.svg').default} 
          logo={require('Assets/Logo cooper.svg').default}
          href="https://www.coopersystem.com.br" />
          
          <Card 
          title="Quem somos?" 
          content="Somos a Mirante, trazendo inovação para o mercado 
          e conectando os melhores profissionais de tecnologia aos 
          negócios de nossos clientes." 
          backgroundImage={require('Assets/FundoMirante.svg').default} 
          logo={require('Assets/Logo mirante.svg').default}
          href="https://www.mirante.net.br" />
          
          <Card 
          title="Quem somos?" 
          content="A CTC é uma empresa especializada em soluções de 
          tecnologia e outsourcing para o mercado privado e governo. 
          Somos referência em transformação digital com soluções completas." 
          backgroundImage={require('Assets/FundoCTC.svg').default} 
          logo={require('Assets/Logo CTC.svg').default}
          href="https://ctctech.com.br" />
        </EmpresaCarousel>
        </div>
        <img className={styles.card_linhasDivisorias} src={linhasImg} alt="Linhas divisórias" />
        <Conclusao />
      </div>

      <img
        className={styles.EmpresasParceiras__LinhasDivisorias}
        src={require('Assets/Linhas-divisorias2.svg').default}
        alt="Linhas divisórias para Empresas Parceiras"
      />
    </section>
  );
}

export default renderSection4;