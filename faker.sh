# ALIAS:alias faker='~/Desktop/fake_cli/faker.sh' || wherever your faker.sh file is located

cd ~/Desktop/faker_cli

data=$(node fake.js $1)

echo ''
echo $data
echo '' 