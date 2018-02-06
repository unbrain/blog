mkdir demo
cd demo
mkdir css js
touch css/style.css index.html js/main.js
echo '<!DOCTYPE>
<title>Hello</title>
<h1>Hi</h1>' >> index.html
echo 'h1{coor: red;}' >> css/style.css
echo 'var string = "GoodBye World"
alert(string)' >> js/main.js
exit
