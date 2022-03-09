# autenticacao-passport-nodejs

O módulo para autenticação será o Passport. Passport é um middleware de segurança muito flexível. 

Também será usada a biblioteca <b>Bcrypt</b> que utiliza hash de senhas. Técnica muito recomendada para armazenar dados sensíveis em banco de dados, como senhas, CPF, RG entre outros. Dessa forma caso os dados sejam expostos o invasor não irá conseguir transformar os hash em código texto. 

<h2>Comandos usados:</h2>

<p>npm i  bcrypt: instala a lib bcrypt, uma das mais populares no gerenciador <b>NPM</b>.</p> 

<p>npm i passport express-session: para manipular as sessões usando Express será usado o módulo express-session.</p> 