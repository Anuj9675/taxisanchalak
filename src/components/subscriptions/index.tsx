export function Subscriptions() {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Video Player */}
          <div className="relative w-full mb-8">
            <iframe
              className="w-full h-[500px] rounded-lg"
              src="https://www.youtube.com/embed/y-oBQEQg32I"
              title="Manage Subscription"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
  
          {/* Steps */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">How to Manage Your Subscription</h2>
            <ol className="text-start text-lg text-gray-600 space-y-4">
              <li>Step 1: Open Taxi Chalak Application. In home screen at the bottom right click on Profile.</li>
              <li>Step 2: Here it will be visible to you that “your free booking limit is over. Upgrade Now!!”. Click on upgrade now button</li>
              <li>Step 3: After clicking upgrade now you will be landed to a new screen. Select here, if you want to upgrade to monthly, quarterly, half yearly or yearly pack.</li>
              <li>Step 4: Once selected you will land to payment page from Razorpay. Please select the mode of payment you want your subscription to be activated and autopay to be deducted you can use (UPI, Debit Card, Credit Card or Net Banking for the same)</li>
              <li>Step 5: Complete your payment and do not close the application or click back button while making the payment. Once everything is completed you will be landed back to Taxi Chalak application.</li>
              <p>Note* – These are autopay payments which means once your payment is done next amount will be auto debited from your preferred mode of payment on the expiry date of your subscription. You have the option to cancel this anytime.</p>
            </ol>
          </div>
        </div>
      </div>
    );
  }
  