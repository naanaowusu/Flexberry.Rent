docker build --no-cache -f SQL\Dockerfile.PostgreSql -t rent/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t rent/app ../..
