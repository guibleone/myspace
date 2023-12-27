import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

const posts = [
  {
    title: 'Introdução à Grécia Antiga',
    slug: 'introducao-a-grecia-antiga',
    content: 'A Grécia Antiga é conhecida por suas contribuições significativas para a filosofia, arte, política e ciência.',
    author: 'Autor 1',
    date: '2023-01-01'
  },
  {
    title: 'Mitologia Grega',
    slug: 'mitologia-grega',
    content: 'A mitologia grega é rica em deuses, deusas, heróis e mitos que influenciaram a cultura ocidental ao longo dos séculos.',
    author: 'Autor 2',
    date: '2023-01-02'
  },
  {
    title: 'Democracia Ateniense',
    slug: 'democracia-ateniense',
    content: 'Atenas, uma das cidades-estado gregas, é famosa por seu sistema político pioneiro, a democracia, onde os cidadãos tinham voz nas decisões públicas.',
    author: 'Autor 3',
    date: '2023-01-03'
  },
  {
    title: 'Arquitetura Grega',
    slug: 'arquitetura-grega',
    content: 'Os gregos antigos foram pioneiros na arquitetura, deixando um legado de templos magníficos, como o Partenon em Atenas.',
    author: 'Autor 1',
    date: '2023-01-04'
  },
  {
    title: 'Filósofos Gregos',
    slug: 'filosofos-gregos',
    content: 'Grandes pensadores como Sócrates, Platão e Aristóteles surgiram na Grécia, desenvolvendo ideias que ainda influenciam o pensamento contemporâneo.',
    author: 'Autor 2',
    date: '2023-01-05'
  },
  {
    title: 'Guerras Pérsicas',
    slug: 'guerras-persicas',
    content: 'As Guerras Pérsicas foram uma série de conflitos entre a Grécia e o Império Persa, destacando-se as batalhas de Maratona e Termópilas.',
    author: 'Autor 3',
    date: '2023-01-06'
  },
  {
    title: 'Olimpíadas Antigas',
    slug: 'olimpiadas-antigas',
    content: 'As Olimpíadas Antigas, realizadas na cidade de Olímpia, eram um importante evento esportivo e cultural na Grécia Antiga.',
    author: 'Autor 1',
    date: '2023-01-07'
  },
  {
    title: 'Teatro Grego',
    slug: 'teatro-grego',
    content: 'O teatro grego, com peças de dramaturgos como Sófocles e Ésquilo, era uma forma de entretenimento e expressão artística.',
    author: 'Autor 2',
    date: '2023-01-08'
  },
  {
    title: 'Alexandre, o Grande',
    slug: 'alexandre-o-grande',
    content: 'Alexandre, o Grande, foi um líder militar que conquistou vastas áreas do mundo conhecido, difundindo a cultura grega pelo Oriente Médio e Ásia.',
    author: 'Autor 3',
    date: '2023-01-09'
  },
  {
    title: 'Declínio da Grécia Antiga',
    slug: 'declinio-da-grecia-antiga',
    content: 'Fatores como guerras internas, invasões e instabilidade política contribuíram para o declínio da Grécia Antiga, marcando o fim da era clássica.',
    author: 'Autor 1',
    date: '2023-01-10'
  }
];

export async function GET() {

  return NextResponse.json(posts);
}