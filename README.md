## Tworzenie grupy zasobów
![alt text](https://github.com/pawel-wis/projekt_wsb/blob/main/photos/appservice.PNG)
## Tworzenie bazy danych w usłudze CosmosDB
```
az cosmosdb create --name wsb-db --resource-group myWsbGroup --kind MongoDB
```

## Pobieranie Klucza Bazy danych do połączenia
```
az cosmosdb list-keys --name wsb-db --resource-group myWsbGroup
```

## Konfigurowanie użytkownika wdrożenia
```
az webapp deployment user set --user-name thomaswsb --password wsb@WSB123!
```

## Tworzenie planu usługi aplikacji
```
az appservice plan create --name myWsbServicePlan --resource-group myWsbGroup --sku F1 --is-linux
```

## Dodawanie tożsamości przypisanej do systemu
* W Panelu Azure tworzymy nowa usługę appService o nazwie TestWSB
* W konfiguracji usługi wybieramy zakładke Tożsamości > Systemowe
* Przełączamy na Włączone i zapisujemy

## Tworzenie aplikacji sieci Web
* Utwórz aplikację sieci web ze środowiska uruchomieniowego NodeJS 14.15 i wdrożony z lokalnego repozytorium git.
```
az webapp create --resource-group myWsbGroup --plan myWsbServicePlan --name wsbnodeapp --runtime "NODE|14-lts" --deployment-local-git
```


## Wypychanie na platformę Azure z git
```
git remote add azure https://thomaswsb@wsbnodeapp.scm.azurewebsites.net/wsbnodeapp.git
```
```
git push azure master
```

## Ustawienie zmiennej konfiguracyjnej
```
az webapp config appsettings set --name wsbnodeapp --resource-group myWsbGroup --settings PORT=3000
```
