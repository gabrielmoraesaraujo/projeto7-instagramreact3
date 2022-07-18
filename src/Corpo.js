import React from "react";

function Story(props){
    return(


            <div class="story">
                <div class="imagem">
                    <img src={props.image} alt=""/>
                </div>
                <div class="usuario">
                    {props.usuario}
                </div>
             </div>
    );
}

function CarregarStories(){
    const stories = [
        { image: "assets/img/respondeai.svg", usuario: "9gag"},
        { image: "assets/img/adorable_animals.svg", usuario: "adorable_animals"},
        { image: "assets/img/bad.vibes.memes.svg", usuario: "bad.vibes.memes"},
        { image: "assets/img/barked.svg", usuario: "barked"},
        { image: "assets/img/catanacomics.svg", usuario: "catanacomics"},
        { image: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet"},
        { image: "assets/img/meowed.svg", usuario: "meowed"},
        { image: "assets/img/respondeai.svg", usuario: "respondeai"},
        { image: "assets/img/wawawicomics.svg", usuario: "wawawicomics"}
        
    ];

    return stories;

}

function CarregarPosts(){
    const posts = [
        
    ]
}





export default function Corpo(){
    const stories = CarregarStories();   
   

    return(

        <div class="corpo">
             <div class="esquerda">
                 <div class="stories">
                    {stories.map(story => <Story image={story.image} usuario={story.usuario}/>)}
                 
                    <div class="setinha">
                      <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                 </div>


                
                 
             </div>
        </div>

        //container esquedo
            //stories
                //story - padrão

            //posts
                //post - padrão

    );
}


 /*        

          <div class="posts">
            <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src="assets/img/meowed.svg" />
                  meowed
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src="assets/img/gato-telefone.svg" />
              </div>

              <div class="fundo">
                <div class="<Navbar />
                <Corpo />n name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src="assets/img/respondeai.svg" />
                  <div class="texto">
                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                  </div>
                </div>
              </div>
            </div>

            <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src="assets/img/barked.svg" />
                  barked
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src="assets/img/dog.svg" />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src="assets/img/adorable_animals.svg" />
                  <div class="texto">
                    Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sidebar">
          <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div></div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/bad.vibes.memes.svg" />
                <div class="texto">
                  <div class="nome">bad.vibes.memes</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/chibirdart.svg" />
                <div class="texto">
                  <div class="nome">chibirdart</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/razoesparaacreditar.svg" />
                <div class="texto">
                  <div class="nome">razoesparaacreditar</div>
                  <div class="razao">Novo no Instagram</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/adorable_animals.svg" />
                <div class="texto">
                  <div class="nome">adorable_animals</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
              <div class="usuario">
                <img src="assets/img/smallcutecats.svg" />
                <div class="texto">
                  <div class="nome">smallcutecats</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div> */