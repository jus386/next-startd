import { tw } from 'twind';
import React, { useState } from 'react';
import Button from '@/components/button';

const ApplyForm = () => {
  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [email, setEmail] = useState(``);
  const [phone, setPhone] = useState(``);
  const [dob, setDob] = useState(``);
  const changeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const changeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const changePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const changeDob = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDob(e.target.value);
  };
  const onApplyClicked = () => {
    fetch(`api/apply`, {
      method: `POST`,
      body: JSON.stringify({
        givenName: firstName,
        familyName: lastName,
        email: email,
        phoneNumber: phone,
        dateOfBirth: dob
      }),
    }).then((applyResponse) => {
      applyResponse.json().then((applyResult) => {
        alert(JSON.stringify(applyResult));
      });
    });
  };

  return (
    <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        <div className={tw(`mb-4 text-center`)}>
          <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>
            Apply for best rates
          </h2>
        </div>
      </div>
      <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
        <div className={tw(`w-full lg:w mt-12 lg:mt-0 m-1`)}>
          <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
            <div className={tw(`pt-4`)}>
              <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>First Name</h4>
              <div className={tw(`flex w-full`)}>
                <input
                  onChange={changeFirstName}
                  aria-label="first name"
                  type="text"
                  className={tw(
                    `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`,
                  )}
                  placeholder="Enter your first name"
                />
              </div>
            </div>
            <div className={tw(`pt-4`)}>
              <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Last Name</h4>
              <div className={tw(`flex w-full`)}>
                <input
                  onChange={changeLastName}
                  aria-label="last name"
                  type="text"
                  className={tw(
                    `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`,
                  )}
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className={tw(`pt-4`)}>
              <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Email</h4>
              <div className={tw(`flex w-full`)}>
                <input
                  onChange={changeEmail}
                  aria-label="email"
                  type="email"
                  className={tw(
                    `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`,
                  )}
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className={tw(`pt-4`)}>
              <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Phone</h4>
              <div className={tw(`flex w-full`)}>
                <input
                  onChange={changePhone}
                  aria-label="phone"
                  type="text"
                  className={tw(
                    `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`,
                  )}
                  placeholder="Enter your phone"
                />
              </div>
            </div>
            <div className={tw(`pt-4`)}>
              <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Date of birth</h4>
              <div className={tw(`flex w-full`)}>
                <input
                  onChange={changeDob}
                  aria-label="dob"
                  type="date"
                  className={tw(
                    `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`,
                  )}
                  placeholder="Enter your date of birth"
                />
              </div>
            </div>
            <div className={tw(`flex w-full pt-4`)}>
              <Button primary onClick={onApplyClicked}>
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;
