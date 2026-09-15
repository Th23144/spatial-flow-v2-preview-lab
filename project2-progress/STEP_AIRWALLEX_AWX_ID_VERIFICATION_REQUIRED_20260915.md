# Airwallex `awx_onboarding_gateway` Verification Required

The serialized gateway-order tail contains `awx_onboarding_gateway` immediately before seven explicit `airwallex_*` gateway IDs. Because the string itself does not contain the literal `airwallex`, the project safety gate requires one final ownership verification before deleting it. No cleanup write against the shared options should include this ID until verification is complete.
