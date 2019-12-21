Desenvolvimento de uma aplicação para controlar os Empréstimo de Viaturas do 
CEPI/CBMCE. 

Abaixo alguns requisitos levantados para o desenvolvimento do app


Requisitos Básicos



- Crud de Vtr
  - Campos (placa,sigla,marca, modelo,avatar)
- Crud de Usuários
  - Campos (avatar, nome, email, cargo, administrador)
- Autenticação
- Recuperação de Senha com disparo de email
- Upload de arquivos e imagens

- Solicitar viatura
  - O condutor deve visualizar todas as viaturas disponíveis
  - Clicar em uma para Solicitar
  - no caso são duas telas uma grid e um form com os dados preenchidos
  - id_vtr, id_usuario, data, hora, km_ini, situacao
  - o condutor poderá editar a jornada até o adm autorizar
  - Quando a viatura for solicitada o sistema deve enviar um email e um push
    para o adm

- Confirmar empréstimo
  - Deve existir um menu com Solicitações
  - Onde o ADM deve autorizar os empréstimos
  - Quando autorizar a situação da jornada deve mudar para 1-emprestada

- Devolver a viatura
  - O condutor de acessar o menu de jornada ativa
  - que abrirá o form da jornada ativa já com os dados de solicitação preenchidos
  - o frontend deve preencher do a data_fim e hora_fim atuais e o condutor deve
    preencher o km_fim
  - no before_update deve ser calculado o km_rodado
  - Quando o condutor informar a devolução o Adm deve receber um email e um push

- Confirmar devolução
  - Deve existir um menu de Devoluções onde o Adm vai confirmar que o condutor
  devolveu a Vtr
  - Após a confirmação a situação muda para 2-devolvida
  - Se a vitaura for devolvida com alterações deve aparecer um campo para
    informar as alterações


- Histórico (Mapa diário ou Ficha de Viatura)
  - deve existir um menu para consultar o histórico das jornadas
  - a lista deve conter todas as jornadas com filtro por vtr e período
  - o sistema deve permitir compartilhamento das informações

- Flag da jornada
  - 1 Aguardando Confirmação de Requisição
  - 2 Em Jornada
  - 3 Aguardando Confirmação de Retorno
  - 4 Devolvida com alterações
  - 5 Devolvida sem alterações


