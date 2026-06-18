#!/bin/bash
DOMAIN="www.mycontinentalfoodstore.co.uk"
curl -sk "https://66.29.141.37/mc-fix-permissions.php?token=mc-fix-perms-2026" -H "Host: $DOMAIN"
echo ""
