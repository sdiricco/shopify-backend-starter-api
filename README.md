# Project setup

- Setup **ngrok**
Ngrok è uno strumento di creare tunnel sicuri verso la tua macchina locale attraverso reti NAT e firewall. E' utile durante lo sviluppo e il testing di applicazioni web o servizi che devono essere accessibili pubblicamente su Internet, anche se sono eseguiti localmente sulla tua macchina.

Visita [ngrok](https://dashboard.ngrok.com/get-started/setup/linux) per installare il servizio e farlo partire

Una volta installato potrai pubblicare la tua applicazione locale all'indirizzo specificato da **ngrok** acon il seguente comando

```sh
ngrok http http://localhost:3000
```

```sh

Session Status                online
Account                       ************* (Plan: Free)
Version                       3.12.0
Region                        Europe (eu)
Latency                       22ms
Web Interface                 http://127.0.0.1:4040
Forwarding                    https://53a4-95-231-228-102.ngrok-free.app -> http://localhost:3000

Connections                   ttl     opn     rt1     rt5     p50     p90
                              1       0       0.00    0.00    5.36    5.36
```

L'indirizzo `https://53a4-95-231-228-102.ngrok-free.app` è l'indirizzo della tua applicazione locale accessibile attraverso Internet.

- Setup ENV variables

Le variabili da settare sono le seguenti:

```
SHOPIFY_API_KEY=******************************
SHOPIFY_API_SECRET_KEY==******************************
SHOPIFY_SCOPES==******************************
SHOPIFY_HOST_NAME==******************************
SHOPIFY_ACCESS_TOKEN==******************************
SHOPIFY_SHOP_NAME==******************************
```
