Prvi korak je kreiranje virtuelnog okruzenja u folderu Chopometry.
Otvorite powershell i udjite u folder koji sadrzi folder Chopometry.
Unesite redom sledece komande:
python -m venv Chopometry
cd Chopometry
scripts/activate
pip install -r req.txt
flask run
Ukoliko ste sve uradili kako treba, pojavice vam se u terminalu
lokalna adresa na kojoj se nalazi aplikacija. Unesite ga u 
browser i to je to. Preporucujem firefox posto sam u njemu razvijao 
aplikaciju. Ukoliko treca komanda nece da se izvrsi je su 
skripte iskljucene na tom racunaru, konsultujte link koji 
vam greska izbacuje da biste ih ukljucili. Pozeljno je da imate
python 3.8. 