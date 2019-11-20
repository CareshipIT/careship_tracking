DOCKER_IMAGE_NAME := careship-tracking

build-docker-image:
	docker build -t $(DOCKER_IMAGE_NAME) .

run-test:
	docker run --rm -v`pwd`:`pwd` -w`pwd`/sdk/recordView/script $(DOCKER_IMAGE_NAME) sh -c 'npm run test'

build-record-script:
	docker run --rm -v`pwd`:`pwd` -w`pwd`/sdk/recordView/script $(DOCKER_IMAGE_NAME) sh -c 'npm run build-record-prod'

build-record-script-dev:
	docker run --rm -v`pwd`:`pwd` -w`pwd`/sdk/recordView/script $(DOCKER_IMAGE_NAME) sh -c 'npm run build-record-dev'
