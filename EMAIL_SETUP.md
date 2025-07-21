# Email Setup Instructions

# Email Setup Instructions

Your contact form is now configured to send emails directly using environment variables! Here's how to complete the setup:

## Quick Setup (Web3Forms - Recommended)

1. **Get your free access key:**
   - Go to https://web3forms.com/
   - Enter your email (lm_amor@esi.dz)
   - Get your free access key (no signup required)

2. **Configure environment variable:**
   - Open `.env.local` in your project root
   - Replace `your_access_key_here` with your actual access key:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key
   ```

3. **Restart your development server:**
   ```bash
   npm run dev
   ```

4. **That's it!** Your form will now send emails directly to your inbox.

## Deployment Setup:

When deploying your site (Vercel, Netlify, etc.), make sure to add the environment variable:

**For Vercel:**
- Go to your project dashboard
- Navigate to Settings → Environment Variables
- Add: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` with your access key

**For Netlify:**
- Go to Site Settings → Environment Variables
- Add: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` with your access key

**Security Note:** The `.env.local` file is already in `.gitignore` and won't be committed to your repository.

## Features Added:

✅ **Custom Favicon:** "MA" logo in browser tab  
✅ **Direct Email Sending:** No more opening email clients  
✅ **Toast Notifications:** User-friendly success/error messages  
✅ **Loading States:** Button shows "Sending..." during submission  
✅ **Form Validation:** Required fields and email validation  
✅ **Mobile Responsive:** Works on all devices  

## Testing:
- The form will work immediately after adding your access key
- Test messages will be sent to lm_amor@esi.dz
- Users get instant feedback via toast notifications

No API keys, no complex setup, just one simple access key and you're ready to receive contact form submissions!
