* Node Package Maneger

__glossary: Dependencies, packages, modules__

- [ ] Verificar se temos o npm instalado `npm -v`
- [ ] Criar nosso próprio pacote `npm init` para editar as informações ao criar ou `npm init -y` para colocar sim para todas as informações e alterar no próprio arquivo package.json
- [ ] O que pe o arquivo package.json
- [ ] Utilizar módulos de terceiros `npm install` ou `npm i` ou `npm install -D` e você coloca o nome do módulo que você quer colocar, na biblioteca do npm existem milhares de módulos para serem utilizados.
- [ ] O que é o diretório node_modules - Se você precisar enviar para o git, não enviar a pasta node_modules, você pode deleta-la e colocar apenas `npm install` que por estar na dependencia do arquivo package.json ele baixa a baixa. Pode tambem coloca-la no arquivo .gitignore para não ser enviada ao git.
- [ ] O que pe o arquivo package-lock.json - serve para fazer um mapeamento dos módulos do seu projeto.
- [ ] Criar scripts para rodar com o npm - `npm run test/start/o que você quiser` utilizado para rodar scripts que estão no package.json. 
- [ ] Instalar pacote de maneira global - `npm i 'nome do modulo' -g` igual instalar o modulo, mas o -g faz com que instale de maneira global no computador. Para saber onde o arquivo está `npm root -g`
- [ ] Desinstalar pacotes - `npm uninstall 'nome do pacote' -g`
- [ ] Mudar versão de pacotes - `npm outdated` para saber as versões e `npm upgrade` para atualizar a versão. Se você quiser com a ultima versão `npm i 'nome do pacote'@latest` pode colocar o numero da versão especifica também caso haja essa necessidade;