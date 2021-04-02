/* eslint-disable import/prefer-default-export */
import Knex from 'knex';
import { v4 } from 'uuid';

export async function seed(knex: Knex) {
  await knex('conectors').insert([
    {
      id: v4(),
      name: 'Madeira Madeira',
      type: 'REST',
      privacy: 'PUBLIC',
      base_URL: 'https://marketplace.madeiramadeira.com.br/v1',
      logo_URL:
        'https://devapi.com.br/static/images/connectors/madeira-madeira.png',
      category: 'Marketplaces',
      description:
        'Nosso objetivo é integra-lo conosco. Queremos crescer juntos, pois juntos somos mais fortes e faremos tudo pelo preço ;)',
      status: 'ACTIVE',
    },
    {
      id: v4(),
      name: 'VTEX',
      type: 'REST',
      privacy: 'PUBLIC',
      base_URL: 'https://{accountName}.{enviroment}.com.br/api',
      logo_URL:
        'https://agenciam3.com/wp-content/uploads/2019/09/100-1024x536.jpg',
      category: 'E-commerce',
      description:
        'Plataforma de E-commerce focada em trazer para o cliente uma elevada experiência de compra através de um comércio unificado.',
      status: 'ACTIVE',
    },
    {
      id: v4(),
      name: 'Agendor',
      type: 'REST',
      privacy: 'PUBLIC',
      base_URL: 'https://api.agendor.com.br/v3/',
      logo_URL: 'https://devapi.com.br/static/images/connectors/agendor.png',
      category: 'CRM',
      description:
        'Software de CRM para empresas que fazem vendas consultivas com vendedores internos e externos.',
      status: 'ACTIVE',
    },
    {
      id: v4(),
      name: 'Bling',
      type: 'REST',
      privacy: 'PUBLIC',
      base_URL: 'https://bling.com.br/Api/v2',
      logo_URL: 'https://bling.com.br/parceiros/imagens/logo.png',
      category: 'ERP',
      description:
        'O Bling é um software de ERP on-line, funciona com NFC-e, E-Commerce e outros.',
      status: 'ACTIVE',
    },
    {
      id: v4(),
      name: 'Conta Azul',
      type: 'REST',
      privacy: 'PUBLIC',
      base_URL: 'https://api.contaazul.com/v1',
      logo_URL: 'https://devapi.com.br/static/images/connectors/conta-azul.png',
      category: 'ERP',
      description:
        'ContaAzul é uma plataforma online de fácil manuseio e controle financeiro para pequenos negócios.',
      status: 'ACTIVE',
    },
    {
      id: v4(),
      name: 'Eive',
      type: 'REST',
      privacy: 'PUBLIC',
      base_URL: '{baseUrl}',
      logo_URL: 'https://devapi.com.br/static/images/connectors/eive.png',
      category: 'ERP',
      description:
        'O EIVE é um ERP para e-commerce que automatiza processos e permite a gestão em tempo real de todas as áreas da operação.',
      status: 'ACTIVE',
    },
    {
      id: v4(),
      name: 'AnyMarket',
      type: 'REST',
      privacy: 'PUBLIC',
      base_URL: 'https://api.anymarket.com.br/v2',
      logo_URL: 'https://devapi.com.br/static/images/connectors/anymarket.png',
      category: 'HUB',
      description:
        'O hub de integração marketplaces que amplia as vendas do seu ecommerce com total segurança e estabilidade.',
      status: 'ACTIVE',
    },
    {
      id: v4(),
      name: 'Ifood',
      type: 'REST',
      privacy: 'PUBLIC',
      base_URL: 'https://pos-api.ifood.com.br',
      logo_URL: 'https://devapi.com.br/static/images/connectors/ifood.png',
      category: 'Delivery',
      description: 'https://pos-api.ifood.com.br',
      status: 'ACTIVE',
    },
    {
      id: v4(),
      name: 'RD Station',
      type: 'REST',
      privacy: 'PUBLIC',
      base_URL: 'https://api.rd.services',
      logo_URL: 'https://devapi.com.br/static/images/connectors/rd-station.png',
      category: 'Delivery',
      description:
        'RD Station é uma plataforma de automação de marketing. O software permite que você atraia visitantes para seu site, transforme-os em leads e transforme-os em clientes, tudo em um só lugar.',
      status: 'ACTIVE',
    },
    {
      id: v4(),
      name: 'Trello',
      type: 'REST',
      privacy: 'PRIVATE',
      base_URL: 'https://api.trello.com/1',
      logo_URL: 'https://devapi.com.br/static/images/connectors/trello.png',
      category: 'Delivery',
      description:
        'O Trello é uma ferramenta de colaboração que organiza seus projetos em painéis. À primeira vista, saiba o que está sendo trabalhado, quem está trabalhando no quê e onde algo está em processo.',
      status: 'ACTIVE',
    },
  ]);
}
