Remove-Item ./css/style.css
Get-ChildItem -Path ./css/ -Recurse -Exclude "style.css" | ForEach-Object { Out-File -filepath ./css/style.css -inputobject (get-content $_.fullname) -Append}