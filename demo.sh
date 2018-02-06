if [ -d $1 ]; then
 	echo 'error: dir exists'
	exit
else
	mkdir $1
	cd $1
	mkdir css js
	touch css/style.css index.html js/main.js
	echo '<!DOCTYPE>
	<title>Hello</title>
	<h1>Hi</h1>' >> index.html
	echo 'h1{coor: red;}' >> css/style.css
	echo 'var string = "GoodBye World"
	alert(string)' >> js/main.js
	echo 'success'
	exit
fi

