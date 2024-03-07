const Contact = () => {
  return (
    <div className="contacts">
      <div className="contacts_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30767295.116023116!2d60.9460276840177!3d19.
          72227226514473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a
          6!2sIndia!5e0!3m2!1sen!2sin!4v1709721536207!5m2!1sen!2sin"
          width="1349"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Map"
        />
      </div>
      <div className="contacts-content">
        <h6>Information</h6>
      </div>
    </div>
  );
};

export default Contact;
