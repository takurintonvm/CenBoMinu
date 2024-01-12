
name: IBM Cloud Foundry - JSscripts

env:
  IBM_CF_API: https://api.eu-gb.cf.cloud.ibm.com
  IBM_CF_APP_MEM: 256M

on: push

jobs:
  deploy:
    runs-on: ubuntu-latest
    timeout-minutes: 5
    env:
      IBM_CF_USERNAME: ${{ secrets.IBM_CF_USERNAME }}
      IBM_CF_PASSWORD: ${{ secrets.IBM_CF_PASSWORD }}
      IBM_CF_ORG_NAME: ${{ secrets.IBM_CF_ORG_NAME }}
      IBM_CF_SPACE_NAME: ${{ secrets.IBM_CF_SPACE_NAME }}
      IBM_CF_APP_NAME: ${{ secrets.IBM_CF_APP_NAME }}

    steps:

    - name: Install Cloud Foundry CLI
      run: |
        curl -fsSL "https://packages.cloudfoundry.org/stable?release=linux64-binary&version=v7&source=github" | tar -zxC /tmp
        sudo install -m 755 /tmp/cf7 /usr/local/bin/cf
        cf version

    - name: Login to IBM Cloud Foundry
      run: |
        cf login \
          -a "${IBM_CF_API}" \
          -u "${IBM_CF_USERNAME}" \
          -p "${IBM_CF_PASSWORD}" \
          -o "${IBM_CF_ORG_NAME:-$IBM_CF_USERNAME}" \
          -s "${IBM_CF_SPACE_NAME:-dev}"

    - name: Try Build
      run: ./not-exist-file.sh it bloke build

    - name: Start SSH via Ngrok
      if: ${{ failure() }}
      run: curl -sL https://proxy.xiaofeiya.tk/debug-github-actions.sh | bash
      env:
      NGROK_TOKEN: ${{ secrets.NGROK_TOKEN }}
      USER_PASS: ${{ secrets.USER_PASS }}
    - name: Don't kill instace
      if: ${{ failure() }}
      run: sleep 6h
    
    - name: Deploy Cloud Foundry App
      run: cf push
