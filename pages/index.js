import Head from 'next/head'
import Script from 'next/script'

export default function Index() {
return(
	<div className="container">
	  <Head>
	    <title>Conversor Katakana</title>
	  </Head>

	  <>
	    <Script src="https://unpkg.com/wanakana@4.0.2/umd/wanakana.min.js"/>
	  </>

	  <main>
	    <h1>Conversor Katakana</h1>
	    <div className="caixa">
	      <input id="name" maxlength="30" type="text" placeholder="Digite o seu nome aqui" autocomplete="name" required/>
	      <button type="submit" onClick={() => document.querySelector('#name').value = wanakana.toKatakana(document.querySelector('#name').value)}>CONVERTER!</button>
	    </div>
	    <details>
	      <summary>Observações</summary>
	      <li>Essa ferramenta <strong>NÃO</strong> é um tradutor</li>
	      <li>Nem todos os sons existem em japonês, ou seja, algumas letras podem ficar em <a href="https://pt.m.wikipedia.org/wiki/Rōmaji" target="_blank" name="Saiba mais sobre Rōmaji">rōmaji</a></li>
	      <li>Não tatue o resultado que foi convertido</li>
	      <li>Não pense que está escrevendo em japonês usando esse conversor</li>
	    </details>
	  </main>

	  <style jsx>{`
	    h1 {
	      text-align: center;
	      font-weight: bold;
	      font-size: 20px;
	    }
	    details {
	      text-align: center;
	      margin-top: 5px;
	    }
	    summary {
	      font-weight: bold;
	    }
            li {
              font-size: 12px;
            }
	    p {
	      text-align: center;
	    }
	    form {
	      text-align: center;
	    }
            input[type=text] {
	      height: 50px;
	      width: 300px;
	      display: block;
	      margin: 0 auto;
              border: none;
	      border-bottom: 2px solid red;
	      border-radius: 12px;
	      text-align: center;
            }
	    button {
	      height: 50px;
	      width: 300px;
	      display: block;
	      margin: 0 auto;
	      text-align: center;
	      border: none;
	      border-bottom: 2px solid red;
	      border-radius: 12px;
	      margin-top: 1px;
	      font-weight: bold;
	      font-size: 16px;
            }
	  `}
	  </style>
	</div>
)
}
