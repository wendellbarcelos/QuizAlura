import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';


export default function Home() {
    const router = useRouter();
    const [name, setName] = React.useState('');

    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                <Widget>
                    <Widget.Header>
                        <h1>{db.title}</h1>
                    </Widget.Header>
                    <Widget.Content>
                        <p>{db.description}</p>
                        <form onSubmit={function (e) {
                            e.preventDefault();
                            router.push(`/quiz?name=${name}`);
                        }}>

                            <Input
                                name="nomeDoUsuario"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Diz ai seu nome"
                                value={name}
                            />
                            <Button type="submit" disabled={name.length === 0}>{`JOGAR ${name}`}</Button>

                        </form>
                    </Widget.Content>
                </Widget>

                <Widget>
                    <Widget.Content>
                        <h1>Quizes da Galera</h1>

                        <p>Dá uma olhada nesse quizes incríveis que o pessoa da Imersão React fez:</p>
                        <Widget.Link href="https://github.com/LucasKetelhut/aluraQuiz" target="_blank">LucasKetelhut/aluraQuiz</Widget.Link>
                        <Widget.Link href="https://github.com/LeonardoT07/aluraquiz-coffee" target="_blank">LeonardoT07/aluraquiz-coffee</Widget.Link>
                        <Widget.Link href="https://github.com/TheeDouglasAM3/pato-quiz-nextjs" target="_blank">TheeDouglasAM3/pato-quiz-nextjs</Widget.Link>
                    </Widget.Content>
                </Widget>
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/wendellbarcelos" />
        </QuizBackground>
    );
}