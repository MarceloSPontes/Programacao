def leiafloat(msg):
    while True:
        try:
            n = str(input(msg))

        except (ValueError, TypeError, KeyboardInterrupt):
            print('\033[31mERRO: Digite Novamente!\033[m')
            continue
        except (KeyboardInterrupt):
            print('\n\033[31mO usuario preferiu não DIGITAR!\033[m')
            return 0
        else:
            return n


def leiaInt(msg):
    while True:
        try:
            n = int(input(msg))

        except (ValueError, TypeError):
            print('\033[31mERRO: Digite Novamente!\033[m')
            continue
        except (KeyboardInterrupt):
            print('\n\033[31mO usuario preferiu não DIGITAR!\033[m')
            return 0
        else:
            return n


ano = 2022

nome = leiafloat('Digite seu Nome Completo : ')
nascimento = leiaInt('Digite o ano de Nascimento : ')

if nascimento > 1922 and nascimento < 2022:
    idade = ano - nascimento
    print(f'Olá : {nome} Nascido em : {nascimento}')
    print(f'Sua idade é: {idade}')
else:
    print('\033[31mAno escolhido esta fora da faixa de 1922 a 2021.\033[m')
