import React from 'react';

import { Container, Row, Col } from 'reactstrap';

function About() {
    return (
        <div id="about">
            <Container>
                <Row>
                    <Col xs="12">
                        <h3>About</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">Image</Col>
                    <Col xs="12" md="6">
                        <p>Bacon ipsum dolor amet turkey strip steak short ribs swine biltong shoulder cupim shank t-bone.
                        Sausage jowl leberkas flank porchetta t-bone short loin beef ribs salami. Tri-tip meatball pig,
                        ham turkey prosciutto cow tongue shankle biltong. Brisket ground round frankfurter chuck, shank doner
                        kielbasa burgdoggen beef ribs turkey. Jowl picanha ball tip, shoulder sirloin tail shank porchetta rump
                        pastrami turkey drumstick. Ball tip rump sausage jerky bresaola spare ribs chuck tri-tip pastrami corned beef
                        short loin prosciutto beef alcatra. Meatball beef swine ball tip frankfurter tail tongue buffalo capicola
                        landjaeger pork picanha tri-tip shoulder.
                        </p>

                        <p>Ham drumstick doner meatball buffalo boudin. Pastrami shank doner, swine t-bone venison bacon turducken pork loin
                        cow alcatra prosciutto turkey. Rump turkey pastrami cupim landjaeger jerky. Landjaeger spare ribs cow ham hock
                        pastrami pork belly pig tenderloin meatball, rump ball tip corned beef ribeye venison. Turkey salami frankfurter
                        pancetta, tail jowl filet mignon cupim. Pastrami bacon kevin pork loin biltong.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;